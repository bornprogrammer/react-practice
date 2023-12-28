import { useSelector } from "react-redux";
import { useGetAlbumsQuery, selectAllAlbums } from "../../store/reducers/albumSlice";
import AlbumHeader from "./AlbumHeader";
import AlbumFooter from "./AlbumsFooter";
import { selectListMetaData } from "../../store/reducers/listMetaDataSlice";

const Albums = () => {
    const { search } = useSelector(selectListMetaData);
    const { isLoading, isSuccess } = useGetAlbumsQuery();
    const albums = useSelector(selectAllAlbums);
    console.log("albums", albums);
    return (
        <>
            <AlbumHeader />
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
            <AlbumFooter />
        </>
    )
};

export default Albums;