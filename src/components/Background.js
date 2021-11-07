const Background = ({desktop,tablet,mobile})=>{
    return(
        <>
            <div className="background">
                <picture>
                    <source srcSet={"/assets/" + desktop} media="(min-width: 1200px)"/>
                    <source srcSet={"/assets/" + tablet} media="(min-width: 768px)"/>
                    <source srcSet={"/assets/" + mobile}/>
                    <img className="bg-img" src={"assets/" + mobile} alt="background"/>
                </picture>
            </div>
        </>
    )
}

export default Background;