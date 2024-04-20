using AuctionService.Data;
using AuctionService.Data.Enums;
using Contracts;
using MassTransit;

namespace AuctionService.Consumers
{
    public class AuctionFinishedConsumer : IConsumer<AuctionFinished>
    {
        private AuctionDbContext _dbContext;
        
        public AuctionFinishedConsumer(AuctionDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Consume(ConsumeContext<AuctionFinished> context)
        {

            Console.WriteLine("--> Consuming Auction Finished");

            var auction = await _dbContext.Auctions.FindAsync(context.Message.AuctionId);

            if (auction != null)
            {
                if (context.Message.ItemSold)
                {
                    auction.Winner = context.Message.Winner;
                    auction.SoldAmount = context.Message.Amount;
                }

                auction.Status = auction.SoldAmount > auction.ReservePrice ?
                    Status.Finished : Status.ReserveNotMet;
            }

            await _dbContext.SaveChangesAsync();
        }
    }
}
