import EmptyFilter from "@/app/components/EmptyFilter";


const SignIn = ({searchParams}: {searchParams: {callbackUrl: string}}) => {
    return (
        <EmptyFilter 
        title="You need to be logged in to view this page" 
        subtitle="Please log in to continue" 
        showLogin callbackUrl={searchParams.callbackUrl}/>
    );
}

export default SignIn;