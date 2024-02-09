import './Card.css'

function Card({children}){

    return(
        <>
            <div>Mi nombre es: </div>
            {children}
        </>
    )
}

export {Card};