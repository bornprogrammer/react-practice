import { useGetPhotosQuery, selectAllPhotos } from '../../store/reducers/photoSlice'
import { useSelector } from "react-redux";

const Photos = () => {
    const { isLoading, isSuccess, isError } = useGetPhotosQuery();

    const photos = useSelector(selectAllPhotos);

    if (isLoading) {
        return (
            <div>This is loading</div>
        )
    }

    if (isError) {
        return (
            <div>This is error</div>
        )
    }

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