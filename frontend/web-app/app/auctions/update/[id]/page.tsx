const Update = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    
    return (
        <div>Update Auction for ID: {id}</div>
    );
}

export default Update;
