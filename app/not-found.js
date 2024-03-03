const NotFound = async () => {

    await new Promise((res) => setTimeout(res, 3000));

    return (
        <h2 style={{ textAlign: "center", padding: 30 }}>Page Not Found</h2>
    );
}

export default NotFound;