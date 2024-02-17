export interface StyleSheet {
    [key: string]: React.CSSProperties;
}

const styles: StyleSheet = {
    content: {
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // overflow: "hidden",
        // height: "100vh"
        backgroundImage: "url(src/pages/home/assets/IMG_3316.jpeg)",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    main: {
        minHeight: "100vh"
    },
    textContent: {
        color: "white",
        textAlign: "center"
    },
}

const Home = () => {


    return (
        <div style={styles.main}>
            <div style={styles.content}>
                {/* <img src="src/pages/home/assets/IMG_3316.jpeg" h /> */}
                <div style={styles.textContent}>
                    <h1>TEREZA STOKLASOVÁ</h1>
                    <h3>@tery_stoklasova</h3>
                    <h3>@terysphotos</h3>
                    <h2>photographer & art director</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;
