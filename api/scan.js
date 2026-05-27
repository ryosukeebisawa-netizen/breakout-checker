export default async function handler(req, res) {
    try {
        // Yahoo!ファイナンスの値上がり・高値圏の人気上位データをリアルタイムで模擬スキャン
        // 鍵（トークン）不要でいつでも安全に応答を返せる構造にします
        const sampleFinData = [
            { code: "7203", name: "トヨタ自動車", price: "¥2,650", change: "+2.4%", market: "東証PRM", type: "年初来高値" },
            { code: "6758", name: "ソニーG", price: "¥13,100", change: "+1.8%", market: "東証PRM", type: "年初来高値" },
            { code: "9984", name: "ソフトバンクG", price: "¥8,920", change: "+3.1%", market: "東証PRM", type: "年初来高値" },
            { code: "8031", name: "三井物産", price: "¥3,240", change: "+1.2%", market: "東証PRM", type: "上場来高値" },
            { code: "8306", name: "三菱UFJ", price: "¥1,580", change: "+4.0%", market: "東証PRM", type: "上場来高値" }
        ];

        return res.status(200).json({ data: sampleFinData });
    } catch (error) {
        return res.status(500).json({ error: "Yahooデータの処理中にエラーが発生しました。" });
    }
}