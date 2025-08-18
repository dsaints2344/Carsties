const Details = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div>Auction Details for ID: {id}</div>
    );
}

export default Details;
