window.onload = () => {

    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    console.log(width,height);

    const colors = [ "green","yellow","blue","red","grey","pink","orange","black"];
    const blockWidth = width / colors.length;
    

    for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i];
        ctx.fillRect(blockWidth*i,0,blockWidth,height);
        
    }

        /*
    ctx.fillStyle = "green";
    ctx.fillRect(blockWidth*0,0,blockWidth,height);

    ctx.fillStyle = "yellow";
    ctx.fillRect(blockWidth*1,0,blockWidth,height);

    ctx.fillStyle = "blue";
    ctx.fillRect(blockWidth*2,0,blockWidth,height);

    ctx.fillStyle = "red";
    ctx.fillRect(blockWidth*3,0,blockWidth,height);


 */

}