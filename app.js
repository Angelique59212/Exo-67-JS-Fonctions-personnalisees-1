function paragraph (param , text) {
    let result = document.getElementById(param);
    result.innerHTML = text;
}
paragraph("p1" , "je suis le premier paragraphe" );
paragraph("p2" , "je suis le deuxième paragraphe");
paragraph("p3", "je suis le troisième paragraphe");
paragraph("p4", "je suis le quatrième paragraphe");
paragraph("p5", "je suis le cinquième paragraphe");


