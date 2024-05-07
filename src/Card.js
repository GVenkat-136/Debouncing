import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({ data }) {
  return (
    <div class="scard dark1">
      <img src={data?.thumbnail} class="imgb" />
      <div class="descrb">
        <h3>{data?.title}</h3>
        <span>{data?.description}</span>
      </div>
      <div class="icons " id="myDIV">
        <i class="fa fa-coffee" ></i>
        <i class="fa fa-glass" ></i>
        <i class="fa fa-shower" ></i>
        <i class="fa fa-s15"></i>
      </div>
      <div><hr /></div>
      <div class="footer">
        <span class="amt">Rs {data?.price} $</span>
        <button class="read">Read More</button>
      </div>
    </div>
  );
}

export default Cards;