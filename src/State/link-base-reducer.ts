const initialBaseState = {
  linkTableData: [
    {
      id: 1,
      Domain: 'si.com',
      DR: 59,
      Traffic: 220053,
      Email: 'boatos.org@gmail.com',
      Price: 345,
      Currency: 'USD',
      Status: 'Answered',
      Comment: 'Need a pre-payment',
      Our_email: 'katerichardson264@gmail.com',
      Project: 'mightytips.com',
      Lang: 'EN',
      Link: 'https://www.talkchelsea.net/chelsea-loses-to-everton-what-happened/',
    },
    {
      id: 2,
      Domain: 'lentepubblica.it',
      DR: 20,
      Traffic: 31000,
      Email: 'boatos.org@gmail.com',
      Price: 135,
      Currency: 'USD',
      Status: 'Doesn\'t fit',
      Comment: 'Doesn\'t accept gambling',
      Our_email: 'katerichardson264@gmail.com',
      Project: 'casinocanada.com',
      Lang: 'PL',
      Link: '',
    },
    {
      id: 3,
      Domain: 'techzimo.com',
      DR: 33,
      Traffic: 8200,
      Email: 'info@hercegovina.in',
      Price: 5535,
      Currency: 'USD',
      Status: 'Need a text assignment',
      Comment: '',
      Our_email: 'katerichardson264@gmail.com',
      Project: 'mightytips.com',
      Lang: 'EN',
      Link: '',
    },
    {
      id: 4,
      Domain: 'programme-tv.net',
      DR: 38,
      Traffic: 35635,
      Email: 'info@hercegovina.in',
      Price: 735,
      Currency: 'PLN',
      Status: 'Article is being written',
      Comment: '',
      Our_email: 'katerichardson264@gmail.com',
      Project: 'casinocanada.com',
      Lang: 'EN',
      Link: 'https://soccernet.ng/2019/05/expectations-for-the-african-cup-of-nations.html',
    },
    {
      id: 5,
      Domain: 'portalcatalao.com.br',
      DR: 52,
      Traffic: 456735,
      Email: 'menifyweb@gmail.com',
      Price: 345,
      Currency: 'PLN',
      Status: 'Send to webmaster',
      Comment: 'So expensive',
      Our_email: 'maksimvoevodin@mightytips.com',
      Project: 'casinocanada.com',
      Lang: 'EN',
      Link: '',
    },
    {
      id: 6,
      Domain: 'fantasyfootballpundits.com',
      DR: 21,
      Traffic: 890035,
      Email: 'office@sannet.ro',
      Price: 305,
      Currency: 'PLN',
      Status: 'No answer',
      Comment: '',
      Our_email: 'maksimvoevodin@mightytips.com',
      Project: 'casinocanada.com',
      Lang: 'EN',
      Link: '',
    },
    {
      id: 7,
      Domain: 'borsod24.hu',
      DR: 12,
      Traffic: 35,
      Email: 'ascom@portalcatalao.com.br',
      Price: 2335,
      Currency: 'EUR',
      Status: 'Blacklist',
      Comment: '',
      Our_email: 'maksimvoevodin@mightytips.com',
      Project: 'casinocanada.com',
      Lang: 'EN',
      Link: '',
    },
  ] as LinkTableType,
}

export const linkBaseReducer = (state: InitialBaseStateType = initialBaseState, action: AppActionsType): InitialBaseStateType => {
  switch (action.type) {
    case 'LINK-BASE/SET-LINKS-DATA':
      return {...state, linkTableData: [...action.linkTableData]}
    default:
      return state
  }
}

// actions
export const setLinkBaseDataAC = (linkTableData: LinkTableType) => ({
  type: 'LINK-BASE/SET-LINKS-DATA',
  linkTableData
} as const)

// types
export type InitialBaseStateType = typeof initialBaseState
export type LinkTableType = Array<LinkTableRowType>
export type LinkTableRowType = {
  id: number,
  Domain?: string,
  DR?: number,
  Traffic?: number,
  Email?: string,
  Price?: number,
  Currency?: string,
  Status?: string,
  Comment?: string,
  Our_email?: string,
  Project?: string,
  Lang?: string,
  Link?: string
}

export type AppActionsType = ReturnType<typeof setLinkBaseDataAC>

