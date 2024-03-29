import React, { memo, useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as S from '../AudioRoom/styles';
import logo from './../../assets/Logo-symphonIA.svg'
import styled from "styled-components";
import AudioPlayer from "../../components/AudioPlayer/index"

const AudioRoom = () => {
  const audioUrl = '/joined_user_result.wav';
  const navigate = useNavigate();
  const tema = localStorage.getItem('tema').toLocaleUpperCase() ?? 'undefined';

  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
  };

  
    return (
      <S.Conteiner>

      <S.WrapperLogo>
        <img src={logo} alt="logo" style={{width: '636px', height: "114px"}}></img>
      </S.WrapperLogo>

      <S.WrapperMain>
      
      <S.WrapperAction>
        <S.ConteinerInf>
          <p className="p-inf">
            Seu Tema é:
          </p>
        </S.ConteinerInf>
        <S.ConteinerTema>
          <p className="p-tema">
            {tema}!!!
          </p>
        </S.ConteinerTema>
        <S.ConteinerInf>
        <p className="p-inf">
            Sua música é:
          </p>
        </S.ConteinerInf>
        <S.ConteinerPlayer>
        <AudioPlayer audioURL={audioUrl}></AudioPlayer>
        </S.ConteinerPlayer>
        <div className="div-inf-next"> 
        <p className="p-inf-next">

          A seguir você deve mixar e usar sua imaginação para deixar a música o mais próxima do tema!
        </p>
        </div>
       
      </S.WrapperAction>

      </S.WrapperMain>
      <button onClick={()=>navigate('/audio-mixer-room')} className="btn-proximo">Próximo</button>

      </S.Conteiner>
    );
  }

export default memo(AudioRoom);