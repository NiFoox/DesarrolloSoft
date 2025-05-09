function generarSerieLog(base = Math.E, desde = 1, hasta = 10, paso = 1) {
    const serie = [];
    for (let x = desde; x <= hasta; x += paso) {
      let y;
      if (base === Math.E) {
        y = Math.log(x); // logaritmo natural
      } else {
        y = Math.log(x) / Math.log(base); // cambio de base
      }
      serie.push({ x: x, y: y });
    }
    return serie;
  }
  
  // Ejemplo de uso:
  const serieLn = generarSerieLog();        // logaritmo natural (ln)
  const serieLog10 = generarSerieLog(10);   // logaritmo base 10
  
  console.log("Serie log natural:", serieLn);
  console.log("Serie log base 10:", serieLog10);
  