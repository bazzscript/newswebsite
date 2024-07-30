export const NewsItem = ({ title, description, imageUrl, newsUrl }) => {
    const defaultImageUrl = "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00";
    const defaultNewsUrl = "https://google.com";
    const defaultTitle = "No Title Available";
    const defaultDescription = "No Description Available";

    return (
        <>
            <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
                <img 
                    src={imageUrl || defaultImageUrl} 
                    style={{ height: "200px", width:"360px"}}
                    className="card-img-top img-fluid" 
                    alt={title || defaultTitle} 
                />
                <div className="card-body">
                    <h5 className="card-title">{`${String(title || defaultTitle).slice(0, 50)}`}</h5>
                    <p className="card-text">{`${String(description || defaultDescription).slice(0, 90)}`}</p>
                    <a href={newsUrl || defaultNewsUrl} className="btn btn-primary">Read More</a>
                </div>
            </div>
        </>
    );
}
