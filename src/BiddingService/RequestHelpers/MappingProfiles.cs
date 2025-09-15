using System;
using AutoMapper;

namespace BiddingService.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Models.Bid, DTOs.BidDto.BidDto>();
    }
}