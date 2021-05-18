let option =[]
let i=0;
let operation=prompt('Choose the opration:');
while(option==!'quit') {
    switch(opeartion){
        case 'add':
            let value=prompt('Enter the ToDo thing:');
            option[1]=value;
            i++;
            break;
    }
    case 'list' {
        console.log('Show the list')
        for(i=0;i<=option.length;i++)
        console.log(option[i]);
}  
        console.log('---------------------');
        break;

case 'delete'{
    let clear = prompt('Enter the index of the deleting list item:');
    option.splice(clear);
    break;
}
default {
console.log('DEFAULT!!!');
console.log('---------------------');
break;
}
let operation=prompt('Choose the opration:');
}



