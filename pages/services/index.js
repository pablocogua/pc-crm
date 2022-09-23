import Service from '../services/service';
const DUMMY_DATA =
    [
        {
            id: "1", title: "Corte", description: "Corte de cabello"
        },
        {
            id: "2", title: "Barba", description: "Barba"
        },
        {
            id: "3", title: "Corte y Barba", description: "Corte de cabello y Barba"
        }
    ];
function Services() {
    return <div className='container'>
        <div className='row'>
            {DUMMY_DATA.map((item) => (<Service key={item.id} service={item} />))}
        </div>
    </div>;
}
export default Services;