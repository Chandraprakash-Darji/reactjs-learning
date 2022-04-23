    const Greet = ({ name, heroName, children }) => {
    return <>
        <div>Hello {name} a.k.a {heroName}</div>
        {children}
    </>
}
export default Greet