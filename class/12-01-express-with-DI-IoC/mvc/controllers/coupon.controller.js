export class CouponController {
    constructor(moneyService){
        this.moneyService = moneyService
    }

    buyCoupon = (req, res) => {
        // 1. 가진돈 검증하는 코드 (10줄 => 2줄)
        // const cashService = new CashService()
        const hasMoney = this.moneyService.checkValue()

        // 2. 쿠폰 구매하는 코드
        if(hasMoney){
            res.send("쿠폰 구매 완료!!")
        }
    }
}