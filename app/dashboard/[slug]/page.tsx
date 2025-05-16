

type Params = Promise < { slug: string } > ;

export default async function Dashboardroute({params}: {params: Params}){
    const {slug} = await params
    return <h1>hello from the slug: {slug} </h1>
} 