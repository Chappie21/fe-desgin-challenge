
interface props {
    title: string,
    items: string[]
}

export const NavigationItem = ({title, items}:props) => {
  return (
    <details>
        <summary>{title}</summary>
        <ul>
            {
                items.map((item, index) => <li key={index}>{item}</li>)
            }
        </ul>
    </details>
  )
}
