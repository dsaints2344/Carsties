using BiddingService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Entities;

namespace BiddingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BidsController : ControllerBase
    {
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Bid>> PlaceBid(string auctionId, int amount)
        {
            var auction = await DB.Find<Auction>().OneAsync(auctionId);

            if (auction == null)
            {
                return NotFound("Auction not found.");
            }

            if (auction.Seller == User.Identity.Name)
            {
                return BadRequest("Sellers cannot bid on their own auctions.");
            }

            var bid = new Bid
            {
                AuctionId = auctionId,
                Bidder = User.Identity.Name,
                Amount = amount
            };

            if (auction.AuctionEnd < DateTime.UtcNow)
            {
                bid.BidStatus = BidStatus.Finished;
            }
            else
            {
                var highestBid = await DB.Find<Bid>()
                .Match(b => b.AuctionId == auctionId)
                .Sort(b => b.Descending(b => b.Amount))
                .ExecuteFirstAsync();

                if (highestBid != null && amount > highestBid.Amount || highestBid == null)
                {
                    bid.BidStatus = amount >= auction.ReservePrice
                        ? BidStatus.Accepted : BidStatus.AcceptedBelowReserve;
                }

                if (highestBid != null && amount <= highestBid.Amount)
                {
                    bid.BidStatus = BidStatus.TooLow;
                }
            }

            await DB.SaveAsync(bid);

            return Ok(bid);
        }

        [HttpGet("{auctionId}")]
        public async Task<ActionResult<List<Bid>>> GetBidsForAuction(string auctionId)
        {
            var bids = await DB.Find<Bid>()
                .Match(b => b.AuctionId == auctionId)
                .Sort(b => b.Descending(b => b.BidTime))
                .ExecuteAsync();

            return Ok(bids);
        }
    }

}
