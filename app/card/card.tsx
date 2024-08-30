function Card({text, heading}:{text:string,heading:string}){

    return(
        <div>
            <h1 className=" text-center m-4">{heading}</h1>
            <p className="bg-slate-500 text-lg text-center m-4"></p>

        </div>
    )
}
export default Card;