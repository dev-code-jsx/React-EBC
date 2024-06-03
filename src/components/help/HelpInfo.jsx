import { Card } from './Card';
import { CardInfo } from './CardInfo';
import './helpInfo.css';
export const HelpInfo = () => {
  return (
    <div className="help-info">
      <h1>Help and Info</h1>
      <div className='cardInfo-container'>
      <CardInfo
        title="aaaa"
        descripcion="aaa"
      />
       <CardInfo
        title="aaa"
        descripcion="aaaa"
      />
      </div>
      <div className="card-container">
        <Card 
        imageSrc="https://finance.zohocorp.com/wp-content/uploads/2019/01/bank-transfers.png" 
        title="aaaa"
        descripcion="aaaa"
        />
        <Card 
        imageSrc="https://finance.zohocorp.com/wp-content/uploads/2019/01/bank-transfers.png" 
        title="aaa"
        descripcion="aa"
        />
        <Card 
        imageSrc="https://finance.zohocorp.com/wp-content/uploads/2019/01/bank-transfers.png" 
        title="aaaa"
        descripcion="aaaa"
        />
        <Card 
        imageSrc="https://finance.zohocorp.com/wp-content/uploads/2019/01/bank-transfers.png" 
        title="aaaa"
        descripcion="aaaaa"
        />
      </div>
    </div>
  );
};
