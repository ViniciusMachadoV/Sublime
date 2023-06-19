import React, { useState, useEffect, useRef } from "react";

function Temporizador() {
  const [tempoRestante, setTempoRestante] = useState(60 * 60); // Cria uma variável de estado que armazena o tempo restante em segundos
  const spanRef = useRef(null); // Cria uma referência ao elemento <span>

  useEffect(() => {
    // Executa uma função quando o componente é montado
    const intervalId = setInterval(() => {
      // Cria um intervalo que executa uma função a cada segundo
      setTempoRestante((tempo) => {
        // Atualiza o tempo restante
        if (tempo > 0) {
          // Se o tempo não acabou, diminui um segundo
          return tempo - 1;
        } else {
          // Se o tempo acabou, reinicia para 60 minutos
          return 60 * 60;
        }
      });
    }, 1000);

    return () => {
      // Executa uma função quando o componente é desmontado
      clearInterval(intervalId); // Limpa o intervalo
    };
  }, []); // Passa um array vazio como dependência para executar apenas uma vez

  useEffect(() => {
    // Executa uma função quando o tempo restante muda
    if (spanRef.current) {
      // Se a referência ao elemento <span> existe
      const minutos = parseInt(tempoRestante / 60, 10); // Converte os segundos em minutos
      const segundos = parseInt(tempoRestante % 60, 10); // Converte os segundos em segundos

      const minutosFormatados = minutos < 10 ? "0" + minutos : minutos; // Formata os minutos com zero à esquerda se necessário
      const segundosFormatados = segundos < 10 ? "0" + segundos : segundos; // Formata os segundos com zero à esquerda se necessário

      spanRef.current.textContent = minutosFormatados + ":" + segundosFormatados; // Atualiza o conteúdo do elemento <span>
    }
  }, [tempoRestante]); // Passa o tempo restante como dependência para executar sempre que mudar

  return (
      <span id="tempo" ref={spanRef}>
        60:00
      </span>
  );
}

export default Temporizador;