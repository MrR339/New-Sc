let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\nββγ π¦ππ§π§ππ‘π ππ’π§ γββ`,
                        "description": "\n\n*@AxellXyz*",
                        "footerText": "πππππ ππππ’πͺ ππ‘π πππ’π’π¦π",
                        "buttonText": "πππππ πππ₯πβ",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "WELCOMEπ",
                                        "description": "mengaktifkan fitur Welcome",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "OFF WELCOMEπ",
                                        "description": "menonaktifkan fitur Welcome",
                                        "rowId": ".off welcome"
                                        },{
                                    	"title": "ANTI DELETEβ",
                                        "description": "mengaktifkan fitur Anti Delete",
                                        "rowId": ".on delete"
                                        },{
                                        "title": "OFF ANTI DELETEβ",
                                        "description": "menonaktifkan fitur Anti Delete",
                                        "rowId": ".off delete"
                                        },{
                                        "title": "VIEWONCEπΎ",
                                        "description": "mengaktifkan fitur Viewonce",
                                        "rowId": ".on viewonce"
                                        },{
                                        "title": "OFF VIEWONCEπΎ",
                                        "description": "menonaktifkan fitur Viewonce",
                                        "rowId": ".off viewonce"             
                                        },{
                                        "title": "DETECTπ§Ώ",
                                        "description": "mengaktifkan fitur Detect",
                                        "rowId": ".on detect"
                                        },{
                                        "title": "OFF DETECTπ§Ώ",
                                        "description": "menonaktifkan fitur Detect",
                                        "rowId": ".off detect"
                                        },{
                                    	"title": "ANTIBADWORDπ«",
                                        "description": "mengaktifkan fitur Antibadword",
                                        "rowId": ".on antibadword"
                                        },{
                                    	"title": "OFF ANTIBADWORDπ«",
                                        "description": "menonaktifkan fitur Antibadword",
                                        "rowId": ".off antibadword"
                                        },{
                                    	"title": "ANTILINKβ",
                                        "description": "mengaktifkan fitur Antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINKβ",
                                        "description": "menonaktifkan fitur Antilink",
                                        "rowId": ".off antilink"
                                        },{
                                    	"title": "ANONYMOUSπ₯·",
                                        "description": "mengaktifkan fitur Anonymous Chat",
                                        "rowId": ".on anon"
                                        },{
                                    	"title": "OFF ANONYMOUSπ₯·",
                                        "description": "menonaktifkan fitur Anonymous Chat",
                                        "rowId": ".off anon"
                                        },{
                                    	"title": "ANTI CALLβοΈ",
                                        "description": "mengaktifkan fitur Anti Call",
                                        "rowId": ".on anticall"
                                        },{
                                    	"title": "OFF ANTI CALLβοΈ",
                                        "description": "menonaktifkan fitur Anti Call",
                                        "rowId": ".off anticall"
                                        },{
                                    	"title": "ANTI SPAMπ?",
                                        "description": "mengaktifkan fitur Anti Spam",
                                        "rowId": ".on antispam"
                                        },{
                                    	"title": "OFF ANTI SPAMπ?",
                                        "description": "menonaktifkan fitur Anti Spam",
                                        "rowId": ".off anticall"
                                        },{
                                    	"title": "ANTI TROLIπ",
                                        "description": "mengaktifkan fitur Anti Troli",
                                        "rowId": ".on antitroli"
                                        },{
                                    	"title": "OFF ANTI TROLIπ",
                                        "description": "menonaktifkan fitur Anti Troli",
                                        "rowId": ".off antitroli"
                                        },{
                                    	"title": "AUTO READπ",
                                        "description": "mengaktifkan fitur Auto Read",
                                        "rowId": ".on autoread"
                                        },{
                                    	"title": "OFF AUTO READπ",
                                        "description": "menonaktifkan fitur Auto Read",
                                        "rowId": ".off autoread"
                                        },{
                                    	"title": "BACKUPποΈ",
                                        "description": "mengaktifkan fitur Backup",
                                        "rowId": ".on backup"
                                        },{
                                    	"title": "OFF BACKUPποΈ",
                                        "description": "menonaktifkan fitur Backup",
                                        "rowId": ".off backup"
                                        },{
                                    	"title": "GROUP ONLYπ",
                                        "description": "mengaktifkan fitur Group Only",
                                        "rowId": ".on grouponly"
                                         },{
                                    	"title": "OFF GROUP ONLYπ",
                                        "description": "menonaktifkan fitur Group Only",
                                        "rowId": ".off grouponly"
                                         },{
                                    	"title": "JADI BOTπ€",
                                        "description": "mengaktifkan fitur Jadi Bot",
                                        "rowId": ".on jadibot"
                                        },{
                                    	"title": "OFF JADI BOTπ€",
                                        "description": "menonaktifkan fitur Jadi Bot",
                                        "rowId": ".off jadibot"
                                        },{
                                    	"title": "NSFW π",
                                        "description": "mengaktifkan fitur Nsfw",
                                        "rowId": ".on nsfw"
                                        },{
                                    	"title": "OFF NSFW π",
                                        "description": "menonaktifkan fitur Nsfw",
                                        "rowId": ".off nsfw"
                                        },{
                                    	"title": "PUBLICπ",
                                        "description": "mengaktifkan fitur Public",
                                        "rowId": ".on public"
                                        },{
                                    	"title": "OFF PUBLICπ",
                                        "description": "menonaktifkan fitur Public",
                                        "rowId": ".off public"
                                        },{
                                    	"title": "AUTO LEVEL UPπ",
                                        "description": "mengaktifkan Auto Level Up",
                                        "rowId": ".on autolevelup"
                                        },{
                                    	"title": "OFF AUTO LEVEL UPπ",
                                        "description": "menonaktifkan fitur Auto Level Up",
                                        "rowId": ".off autolevelup"
                                        },{
                                    	"title": "RPGπ‘οΈ",
                                        "description": "mengaktifkan fitur Rpg",
                                        "rowId": ".on rpg"
                                        },{
                                    	"title": "OFF RPGπ‘οΈ",
                                        "description": "Menonaktifkan fitur Rpg",
                                        "rowId": ".off rpg"                                        
                                        },{
                                    	"title": "STICKERπΈ",
                                        "description": "mengaktifkan fitur Sticker",
                                        "rowId": ".on stiker"
                                        },{
                                    	"title": "OFF STICKERπΈ",
                                        "description": "menonaktifkan fitur Sticker",
                                        "rowId": ".off stiker"
                                        },{
                                    	"title": "SIMIβ¨",
                                        "description": "mengaktifkan fitur Simi",
                                        "rowId": ".on simi"
                                        },{
                                    	"title": "OFF SIMIβ¨",
                                        "description": "menonaktifkan fitur Simi",
                                        "rowId": ".off simi"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['botsettings']
handler.tags = ['owner']
handler.command = /^(botsett|settingsbot|botsettings|settbot|botzsett)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
