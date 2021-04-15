interface ContentProps {
  title: string
}


export const Content: React.FC<ContentProps> = (children, props) => {
 return (

  <div className="container">
  <header>
    <span className="category">Categoria:<span> {props.title}</span></span>
  </header>

  <main>
    <div className="movies-list">
      {children}
    </div>
  </main>
</div>
 )
}