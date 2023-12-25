import { useEffect, useState } from "react";


const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json()).then((data) => {
            setPhotos(data);
        });
    }, []);
    return (
        <div>
            List of Photos
            <div>
                {
                    photos.map((photo) => {
                        return (
                            <div key={photo.id}>
                                Photo Name : {photo.title}
                                <img src={photo.thumbnailUrl} alt="nothing" />
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
};

export default Photos;