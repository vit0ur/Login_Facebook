import profile from './images/profile.jpg';
export default function(props){
    return (
        <div className="feedPosts">

<div className="feedPostSingle">
  <div className="feedPost__profile">
    <img src={profile} />
    <h3>{props.nome}<br /><span>{props.horario}</span></h3>
 
  </div>

  <div className="feedPost__content">
    <p>{props.conteudo}</p>
      <img src={props.img} />
  </div>

</div>


</div>
    );
}