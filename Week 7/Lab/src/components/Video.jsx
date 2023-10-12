const Video = (props) => {
    const { data } = props

    return (
        <video style={{
            width: "600px",
            height: "400px",
        }}
            crossOrigin="anonymous"
            controls
        >
            <source src={data.url} />
        </video>
    )
}

export default Video