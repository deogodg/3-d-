function verificarSintoma() {
    const sintomas = {
      'dor de cabeça': 'Pode ser causada por estresse, enxaqueca ou tensão muscular.',
      'dor de garganta': 'Pode ser uma infecção viral ou bacteriana.',
      'dor de barriga': 'Pode indicar má digestão, gastrite ou virose.',
      'dor nas costas': 'Pode ser resultado de má postura ou esforço físico.',
      'dor no peito': 'Se persistir, consulte um médico, pode ser sério.',
      'dor no pé': 'Pode ser consequência de esforço excessivo ou lesão.',
      'dor no braço': 'Pode estar relacionado a esforço ou até sinais cardíacos.',
      'dor no joelho': 'Comum em lesões esportivas ou desgaste.',
      'dor no ombro': 'Pode ser tendinite ou bursite.',
      'dor no pescoço': 'Pode ser tensão muscular ou má postura.',
      'dor no pulso': 'Pode indicar tendinite por esforço repetitivo.',
      'dor no tornozelo': 'Pode ser uma torção ou lesão ligamentar.',
      'dor no quadril': 'Pode ser artrite ou bursite.',
      'dor no cotovelo': 'Comum em lesões como epicondilite.',
      'dor no dedo': 'Pode ser uma contusão ou inflamação.',
      'dor no calcanhar': 'Pode indicar fascite plantar.',
      'dor no estômago': 'Pode ser gastrite, úlcera ou refluxo.',
      'dor no fígado': 'Pode ser resultado de inflamação ou acúmulo de gordura.',
      'dor no intestino': 'Pode estar associada a gases, constipação ou infecção.',
      'dor no rim': 'Pode ser sintoma de cálculo renal ou infecção.',
      'dor no olho': 'Pode ser cansaço visual ou conjuntivite.',
      'dor no ouvido': 'Pode ser infecção ou acúmulo de cera.',
      'dor no pulmão': 'Se houver dificuldade ao respirar, procure ajuda médica.'
    };
  
    const sintomaSelecionado = document.getElementById('sintoma').value;
    const mensagem = sintomas[sintomaSelecionado] || 'Sintoma não encontrado. Consulte um médico.';
  
    document.getElementById('mensagemConfirmar').innerText = mensagem;
  } 

  