var listaFilmes = []
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg" ,"https://m.media-amazon.com/images/M/MV5BYjcyYTk0N2YtMzc4ZC00Y2E0LWFkNDgtNjE1MzZmMGE1YjY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg");

var nomeFilmes = []
nomeFilmes.push("Avengers ENDGAME", "Spider-Man: Far from Home", "Captain Marvel", "Avengers: Infinity War", "Black Panther", "Ant-Man and the Wasp", "Thor: Ragnarok");

var trailer = []
trailer.push("https://www.youtube.com/watch?v=VBv8ILgZMbU", "https://www.youtube.com/watch?v=6bpZXJgtYww", "https://www.youtube.com/watch?v=_q3SH0dr17k", "https://www.youtube.com/watch?v=IxKpC_7RO8Q", "https://www.youtube.com/watch?v=H6A6GvryOG8", "https://www.youtube.com/watch?v=0HGBv7s1Y7E&t=4s", "https://www.youtube.com/watch?v=Tlku2z0WBaE");

for (var i = 0; i < listaFilmes.length; i++){
  document.write(
    "<div class='itens'>", "<a href=", trailer[i], " target='_blank' >", `<img class='$ {(i == 5)?"poster":"poster"}' 
  src=${listaFilmes[i]}  >`, "<h2 class='nomes'>", nomeFilmes[i], "</h2>", "</a>", "</div>")
}
