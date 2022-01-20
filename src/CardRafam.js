import './App.css';
import ModalPersona from './ModalPersona.js'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Header from './Header.js'
import React from 'react';
import Divider from '@material-ui/core/Divider';


function CardRafam({headerProps, content, buttonProps}) {

  /* si sacamos el modal afuera para que el handle lo manejemos directamente de app esto iría alla tambien*/ 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <div>
      <div className="cardCointainer">
        <Card className="card">
          <Header title={headerProps.title} linkText={headerProps.linkText} handleClick={handleClick} />
          <Divider variant="middle" />
          { content &&
            <div className="cardContent">
              {content}
            </div>
          }
          { buttonProps && 
            <div className="cardButton">
              <Button variant={buttonProps.variant} color={buttonProps.color} onClick={buttonProps.clickHandle}>
                {buttonProps.text}
              </Button>
            </div>
          }
        </Card>
      </div>
      <ModalPersona open={open} handleClose={handleClose}></ModalPersona>
    </div>
  );
}

export default CardRafam;
