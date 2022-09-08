import styles from './network-code.module.scss'
import React, {useEffect, useState} from "react";
import ShareModal from "lit-share-modal-v3";
import { Button } from "../../../../components";
// const ShareModal = require("lit-share-modal-v3/dist/lit-share-modal-v3.umd.js")

const initialTextArea = [
  {
    "contractAddress": "",
    "standardContractType": "",
    "chain": "ethereum",
    "method": "eth_getBalance",
    "parameters": [
      ":userAddress",
      "latest"
    ],
    "returnValueTest": {
      "comparator": "&gt;=",
      "value": "10000000000000"
    }
  }
]

const NetworkCode = () => {
  const [showShareModal, setShowShareModal] = useState(false)
  const [unifiedAccessControlConditions, setUnifiedAccessControlConditions] = useState('')

  const onUnifiedAccessControlConditionsSelected = (shareModalOutput: any) => {
    setShowShareModal(false);
    if (shareModalOutput.unifiedAccessControlConditions) {
      const prettify = JSON.stringify(shareModalOutput.unifiedAccessControlConditions, undefined, 4);
      setUnifiedAccessControlConditions(prettify)
    }
  }

  useEffect(() => {
    onUnifiedAccessControlConditionsSelected({unifiedAccessControlConditions: initialTextArea});
  }, [])

  const toggleShowShareModal = () => {
    document.body.style.overflow = 'hidden';
    setShowShareModal(true)
  }

  const toggleHideShareModal = () => {
    document.body.style.overflow = 'unset';
    setShowShareModal(false);
  }

  return (
    <div>
        <div className={styles.wrapper}>
          <div className={styles.title} onClick={() => toggleShowShareModal()}>Create an access control requirement</div>
            <textarea rows={35} value={unifiedAccessControlConditions} onChange={(e) => setUnifiedAccessControlConditions(e.target.value)}/>
          </div>
      {showShareModal && (
        <div id={'share-modal-container'} className={styles.modalBackSplash}>
          <div className={styles.shareModal}>
            <ShareModal
              isModal={true}
              onClose={() => {
                toggleHideShareModal();
              }}
              onUnifiedAccessControlConditionsSelected={onUnifiedAccessControlConditionsSelected}
            />
          </div>
        </div>
      )}
      <Button className={styles.action} onClick={() => toggleShowShareModal()}>Create Requirement</Button>
    </div>
  )
}

export default NetworkCode