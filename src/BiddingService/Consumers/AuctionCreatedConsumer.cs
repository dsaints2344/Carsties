using System;
using BiddingService.Models;
using Contracts;
using MassTransit;
using MongoDB.Entities;

namespace BiddingService.Consumers;

public class AuctionCreatedConsumer : IConsumer<AuctionCreated>
{
    public async Task Consume(ConsumeContext<AuctionCreated> context)
    {
        var auction = context.Message;

        var newAuction = new Auction
        {
            ID = context.Message.Id.ToString(),
            Seller = context.Message.Seller,
            ReservePrice = context.Message.ReservePrice,
            AuctionEnd = context.Message.AuctionEnd
        };

        await newAuction.SaveAsync();
    }
}
