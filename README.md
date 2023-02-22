# README

# CLASS COMPONENTS (SCREENS)

Abbiamo gestito login e subscribe con due screen che sono rispettivamente due class components, trovabili nella folder "screens"

# FUNCTIONAL COMPONENTS

Nella folder "funcComponents" abbiamo inserito, con i rispettivi css, i seguenti componenti:

- Form: form generale che verrà differenziata nelle due screen "login" e "subscribe" in base ai children.
- Input: componente input usato per gestire input testuali, checkbox, radio. E' presente l'icona per , quando serve, mostrare la password.
- FormButton: componente del bottone usato per completare il login ed il subscribe
- Select: componente usato per la scelta del ruolo
- SocialLogo: icone per il log in tramite il social (inattive)

# UTILS

Nella folder "utils" abbiamo messo i file contenenti le funzioni riutilizzate all'interno dei entrambe le screens create:

- getSetLocalStorage: contiene le funzioni per fare il get e il set dal localstorage.
- Input controls: contiene le funzioni per i vari controlli degli input inseriti durante il login o la registrazione:

  > checkValidityInput: controlla che in generale un input passato non sia vuoto, lasciando un messaggio d'errore.
  > checkLengthInput: controlla che l'input passato abbia una lunghezza sufficiente (usato per password di almeno 8 caratteri)
  > checkRegExInput: controlla che l'input passato rispetti la regex (usato per email)
  > checkPasswords: controlla che le due password passate coincidano
  > checkGdpr: controlla l'avvenuta accettazione delle condizioni di servizio
