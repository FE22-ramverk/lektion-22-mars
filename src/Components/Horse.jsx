import './Horse.css';

function Horse({pony, breed}) {
    return ( 
        <article className="ponyCard">
            <img src={pony.img} />
            <h2>{pony.name}</h2>
            <h3>{breed}</h3>
        </article>
     );
}

export default Horse;