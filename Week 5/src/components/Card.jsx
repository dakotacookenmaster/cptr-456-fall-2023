const Card = (props) => {
    const { item, handleRemoveItem, handleToggleItem } = props
    return (
        <>
            <div style={{
                textDecoration: item.checked ? "line-through" : "none",
            }}>{ item.value }</div>
            <button onClick={() => {
                handleToggleItem(item.id)
            }}>{
                item.checked ? "❌" : "✅"
            }</button>
            <button onClick={() => {
                handleRemoveItem(item.id)
            }}>🗑️</button>
        </>
    )
}

export default Card