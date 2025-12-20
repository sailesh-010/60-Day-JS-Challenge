async function handle(req,res){
    try{
        const data = await fetch("<url>");
        const json = await data.json();
        console.log(json);
        console.log("fetch data without error");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}