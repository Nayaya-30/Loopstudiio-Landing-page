export const Content2 = () => {
    const data = [
        { title: 'Deep earth', image: 'deep-earth' },
        { title: 'Night arcade', image: 'night-arcade' },
        { title: 'Soccer team VR', image: 'soccer-team' },
        { title: 'The grid', image: 'grid' },
        { title: 'From up above VR', image: 'from-above' },
        { title: 'Pocket borealist', image: 'pocket-borealis' },
        { title: 'The curiosity', image: 'curiosity' },
        { title: 'Make fisheye', image: 'fisheye' },
    ];
    return (
        <section className={'gallery'}>
            <label className={'gallery-head'}>
                <h2 className={'gallery-title'}>OUR CREATIONS</h2>
                <button type={'submit'} className={'gallery-btn'}>SEE ALL</button>
            </label>

            <div className={'gallery-body'}>
                {data.map((item, index) => {
                    return  <Card key={index} image={item.image} title={item.title.toUpperCase()}></Card>
                })}
            {/* {data.map((item, index) => (
  <Card key={index} image={item.image} title={item.title} />
))}
*/}
            </div>
        </section>
    )
}

const Card = ({ image, title }) => {
    return (
        <div className={'gallery-card'}>
            <img className={'gallery-card-img'} src={`./images/desktop/image-${image}.jpg`} alt={title} />
            <h2 className={'gallery-card-title'}>{title}</h2>
        </div>
    )
}