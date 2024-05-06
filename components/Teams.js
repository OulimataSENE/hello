function Team(props){
    let theme =
        props.title > 10 ? "success" : 
            props.title > 0 ? "warning" : "danger";

    let classes = `alert alert-${theme} text-center`;

    return (
        <h1 className={classes}>
            <strong>{props.name}</strong> a remporté <strong>{props.title}</strong> titres
        </h1>
    )
}

export default Team;