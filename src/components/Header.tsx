interface TitleHeaderProps {
  title: string;
}

export function Header(props: TitleHeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {props.title} </span></span>
    </header>
  )
}