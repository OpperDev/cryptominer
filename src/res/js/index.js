window.$ = window.jQuery = require('jquery')
$(document).ready( function() {
    async function init() {
        const { ipcRenderer, remote } = require('electron')
        const CoinImp = require('coin-imp')
        
        const miner = await CoinImp('<YOUR-PRIVATE-KEY>')

        async function minerState(state) {
            if (state) await miner.start()
            else await miner.stop()
        }

        miner.on('update', data => {
            $('.hashrate').text(`Hashrate: ${data.hashesPerSecond} H/s`)
            $('.total-hashes').text(`Total hashes: ${data.totalHashes}`)
        })

        $('.close-btn').click(() => ipcRenderer.send('close-app'))
        $('.minimize-btn').click(() => remote.getCurrentWindow().minimize())

        $('.start-btn').click( function () {
            $('.displayed-text').text('Working...')
            $('.stop-btn').prop('disabled', false)
            $(this).prop('disabled', true)
            $('.texts').show()
            minerState(true)
        })

        $('.stop-btn').click( function () {
            $('.displayed-text').text('Stopped.')
            $('.start-btn').prop('disabled', false)
            $(this).prop('disabled', true)
            $('.texts').hide()
            minerState(false)
        })
    }

    init()
})