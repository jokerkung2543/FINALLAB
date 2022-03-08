function Name(props){
    return <li>{props.data}. {props.brand}</li>;
}

function Brand(){
    const brandNames = [
        {id: 1, brand: "Toyota"},
        {id: 2, brand: "Mazda"},
        {id: 3, brand: "Kubota"},
    ];
        


    return(
        <>
            <ul>
                {brandNames.map((brandNames)=> (
                <Name data={brandNames.id} brand={brandNames.brand}/>
                ))}
            </ul>
        </>
    );
}

export default Brand;