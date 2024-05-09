module.exports.config = {
    name: "sim",
  version: "1.0.0",
    hasPermssion: 0,
    credits: "Ryusui", 
    description: "\u0043\u0068\u0061\u0074 \u0077\u0069\u0074\u0068 \u0053\u0069\u006d\u0073\u0069\u006d\u0069 ",
    commandCategory: "Simsimi",
    usages: "(text)",
  cooldowns: 5, 
}
module.exports.run = async ({ api, event, args }) => { 
    const senku = global.nodemodule.axios
    let ryusui = args.join(' ')
    const gen = await senku.get(
    'https://api.phamvandien.xyz/sim?type=ask&ask=' + ryusui
)
    var tsukasa = gen.data.answer
    return api.sendMessage('' + tsukasa, event.threadID, event.messageID)
    }et/v2/?text=${g(a)}&lc=en`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.simsimi && (global.simsimi = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.simsimi.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.simsimi.get(c)) return;
        var { data: h, error: i } = await simsimi(f, b, a);
        return !0 == i ? void 0 : !1 == h.success ? g(h.error) : g(h.success)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("Jee BoLo Meri Jaan (ღ˘⌣˘ღ)");
    switch (c[0]) {
        case "on":
            return global.simsimi.has(d) ? f("You have not turned off the sim.") : (global.simsimi.set(d, e), f("Successfully enabled sim."));
        case "off":
            return global.simsimi.has(d) ? (global.simsimi.delete(d), f("Successfully disabled sim.")) : f("You have not enabled the sim.");
        default:
            var { data: g, error: h } = await simsimi(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.success ? f(g.error) : f(g.success);
    }
};
