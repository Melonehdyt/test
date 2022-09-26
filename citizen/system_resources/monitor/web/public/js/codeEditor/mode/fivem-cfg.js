CodeMirror.defineSimpleMode("fivem-cfg",{start:[{regex:/(["'])(?:[^\\]|\\.)*?(?:\1|$)/,token:"string"},{regex:/(?:ensure|refresh|restart|start|set|seta|setr|sets)\b/i,token:"def"},{regex:/(?:endpoint_add_tcp|endpoint_add_udp|load_server_icon|sv_authMaxVariance|sv_authMinTrust|sv_endpointPrivacy|sv_hostname|sv_licenseKey|sv_master1|sv_maxClients|rcon_password|sv_scriptHookAllowed)\b/i,token:"keyword"},{regex:/(?:add_ace|add_principal|remove_ace|remove_principal|test_ace)\b/i,token:"variable-2"},{regex:/banner_connecting|banner_detail|locale|steam_webApiKey|tags/i,token:"atom"},{regex:/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,token:"number"},{regex:/\/\/.*/,token:"comment"},{regex:/#.*/,token:"comment"},{regex:/\/(?:[^\\]|\\.)*?\//,token:"variable-3"},{regex:/\/\*/,token:"comment",next:"comment"},{regex:/[a-z$][\w$]*/,token:"variable"}],comment:[{regex:/.*?\*\//,token:"comment",next:"start"},{regex:/.*/,token:"comment"}]});