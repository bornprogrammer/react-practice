import { useEffect, useState } from "react";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/albums").then((response) => response.json()).then((data) => {
                setAlbums(data);
            }).catch((error) => {
                setError("there is some error while fetching the albums");
            }).finally(() => {
                setLoading(false);
            });
        }, 5000);
    }, []);
    return (
        <>
            {isLoading && <div>Album list is being loaded</div>}
            {error && <div>{error}</div>}
            {albums.length > 0 && <div>
                List of Albums
                <div>
                    {
                        albums.map((album) => {
                            return (
                                <div key={album.id}>
                                    Name of album is {album.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>}
        </>
    )
};

export default Albums;