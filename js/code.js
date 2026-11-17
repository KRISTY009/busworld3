let list_inputs = [].slice.call(document.querySelectorAll('input'));

let prev_comment = document.getElementById('prev-comment'),
    list_comments = [].slice.call(document.getElementsByClassName('comment')),
    next_comment = document.getElementById('next-comment'),
    index_comment = 0;

let list_concepts = [].slice.call(document.getElementsByClassName('concept'));

let nav_opt = [].slice.call(document.getElementsByClassName('nav_opt'));

let burnav_open = document.getElementById('hamburger-button'),
    burnav_close = document.getElementById('hamburger-close'),
    burnav = document.getElementById('burnav');

let list_seats = [].slice.call(document.getElementsByClassName('seat-yes'));

let list_card_to = [].slice.call(document.getElementsByClassName('card-to')),
    list_card_from = [].slice.call(document.getElementsByClassName('card-from'));

let list_but_card = [].slice.call(document.getElementsByClassName('card-but-more'));

let list_but_change = [].slice.call(document.getElementsByClassName('but-change'));

let list_nav_book = [].slice.call(document.getElementsByClassName('nav-book'));

let list_but_history_more = [].slice.call(document.getElementsByClassName('card-history-but-more'));

let list_days = [].slice.call(document.getElementsByClassName('calendar-this-month'));

try {
let amount_minus = document.getElementById('amount-minus'),
    amount_list_number = document.getElementById('amount-list-number').value,
    amount_plus = document.getElementById('amount-plus');
} catch (error) {
    console.log(error);
}
let field_from = document.getElementById('search-field-from'),
    field_to = document.getElementById('search-field-to'),
    field_from_when = document.getElementById('search-field-from-when'),
    field_to_when = document.getElementById('search-field-to-when'),
    field_amount = document.getElementById('search-field-amount'),

    field_from_list = document.getElementById('fr-l'),
    field_to_list = document.getElementById('to-l'),
    field_from_when_list = document.getElementById('fr-when-l'),
    field_to_when_list = document.getElementById('to-when-l'),
    field_amount_list = document.getElementById('amount-l'),

    search_more = document.getElementById('search-more'),
    list_lists = [].slice.call(document.getElementsByClassName('l'));

let but_swap = document.getElementById('but-swap'),
    field_from_input = document.getElementById('search-field-from-input'),
    field_to_input = document.getElementById('search-field-to-input'),

    list_opts_to = [].slice.call(document.getElementsByClassName('opt-to')),
    list_opts_from = [].slice.call(document.getElementsByClassName('opt-from'));

let list_icon_info = [].slice.call(document.getElementsByClassName('icon-more')),
    list_icon_info_about = [].slice.call(document.getElementsByClassName('icon-more-about'));

try {
list_inputs.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('active');
    })
});
} catch (error) {
    console.log(error);
}

try {

prev_comment.addEventListener('click', () => {
    list_comments[index_comment].style.display = 'none';
    if (index_comment == 0) {
        index_comment = list_comments.length - 1;
    } else {
        index_comment--;
    }
    list_comments[index_comment].style.display = 'flex';
})

next_comment.addEventListener('click', () => {
    list_comments[index_comment].style.display = 'none';
    if (index_comment == (list_comments.length - 1)) {
        index_comment = 0;
    } else {
        index_comment++;
    }
    list_comments[index_comment].style.display = 'flex';
})
list_concepts.forEach(element => {
    element.addEventListener('click', () => {
        list_concepts.forEach(el => {
            el.classList.remove('active');
        });
        element.classList.add('active');
    })
});
} catch (error) {
    console.log(error);
}

nav_opt.forEach(element => {
    element.addEventListener('click', () => {
        element.style.color = 'var(--bg-accent)'
    })
});

burnav_open.addEventListener('click', () => {
    burnav_open.style.display = 'none';
    burnav.style.display = 'flex';
})

burnav_close.addEventListener('click', () => {
    burnav_open.style.display = 'flex';
    burnav.style.display = 'none';
})

try {
list_seats.forEach(element => {
    element.addEventListener('click', () => {  
        console.log('1');
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    })
});

// list_seats.forEach(element => {
//     element.onclick(() => {
//         if (element.classList.containes('active')) {
//             element.classList.remove('active');
//         } else {
//             element.classList.add('active');
//         }
// })
// });
} catch (error) {
    console.log(error);
}

try {
list_card_to.forEach(element => {
    element.addEventListener('click', () => {
        list_card_to.forEach(el => {
            el.classList.remove('active');
        });
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    })
});

list_card_from.forEach(element => {
    element.addEventListener('click', () => {
        list_card_from.forEach(el => {
            el.classList.remove('active');
        });
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    })
});

} catch (error) {
    console.log(error);
}

try {
list_but_card.forEach(element => {
    element.addEventListener('click', () => {
        window.location = 'booking.html';
    })
});
} catch (error) {
    console.log(error);
}

try {
list_but_change.forEach(element => {
    element.addEventListener('click', () => {  
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    })
});
} catch (error) {
    console.log(error);
}

try {
list_nav_book.forEach(element => {
    element.addEventListener('click', () => {
        list_nav_book.forEach(el => {
            el.classList.remove('active');
        });
        element.classList.add('active');
    })
});
} catch (error) {
    console.log(error);
}

try {
list_but_history_more.forEach(element => {
    element.addEventListener('click', () => {
        window.location = 'booking_management.html';
    })
});
} catch (error) {
    console.log(error);
}

try {
list_days.forEach(element => {
    element.addEventListener('click', () => {
        list_days.forEach(el => {
            el.classList.remove('active');
        });
        if (element.classList.contains('active')) {
            element.classList.remove('active');
        } else {
            element.classList.add('active');
        }
    })

});
} catch (error) {
    console.log(error);
}

try {


field_from.addEventListener('click', () => {
    if (field_from_list.classList.contains('active')) {
        field_from_list.classList.remove('active');
        search_more.classList.remove('active');
    } else {
        list_lists.forEach(element => {
            element.classList.remove('active')
        });
        search_more.classList.add('active');
        field_from_list.classList.add('active');
    }
    
})

field_to.addEventListener('click', () => {
    if (field_to_list.classList.contains('active')) {
        field_to_list.classList.remove('active');
        search_more.classList.remove('active');
    } else {
        list_lists.forEach(element => {
            element.classList.remove('active')
        });
        field_to_list.classList.add('active');
        search_more.classList.add('active');
    }
    
})

field_from_when.addEventListener('click', () => {
    if (field_from_when_list.classList.contains('active')) {
        field_from_when_list.classList.remove('active');
        search_more.classList.remove('active');
    } else {
        list_lists.forEach(element => {
            element.classList.remove('active')
        });
        field_from_when_list.classList.add('active');
        search_more.classList.add('active');
    }
    
})

field_to_when.addEventListener('click', () => {
    if (field_to_when_list.classList.contains('active')) {
        field_to_when_list.classList.remove('active');
        search_more.classList.remove('active');
    } else {
        list_lists.forEach(element => {
            element.classList.remove('active')
        });
        field_to_when_list.classList.add('active');
        search_more.classList.add('active');
    }
    
})

field_amount.addEventListener('click', () => {
    if (field_amount_list.classList.contains('active')) {
        field_amount_list.classList.remove('active');
        search_more.classList.remove('active');
    } else {
        list_lists.forEach(element => {
            element.classList.remove('active')
        });
        field_amount_list.classList.add('active');
        search_more.classList.add('active');
    }
    
})

} catch (error) {
    console.log(error);
}

try {
but_swap.addEventListener('click', () => {
    old_val_from = field_from_input.value;
    old_val_to = field_to_input.value;
    field_from_input.value = old_val_to;
    field_to_input.value = old_val_from;
})

list_opts_from.forEach(element => {
    element.addEventListener('click', () => {
        let content = element.textContent;
        field_from_input.value = content;
    })
});

list_opts_to.forEach(element => {
    element.addEventListener('click', () => {
        let content = element.textContent;
        field_to_input.value = content;
    })
});


} catch (error) {
    console.log(error);
}

try {
for (let i; i < list_icon_info.length; i++) {
    
}
}