import { Modal, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import CustomFonts from '../CustomFonts';

interface Props {
  visible: boolean;
  onCancel: () => void;
}

export default function SystemSettings({ visible, onCancel }: Props) {
  const { t } = useTranslation();

  return (
    <Modal width={800} open={visible} onCancel={onCancel} footer={null}>
      <Tabs
        tabPosition="left"
        items={[
          {
            key: 'custom_fonts',
            label: t('menu.customFont'),
            children: <CustomFonts></CustomFonts>
          }
        ]}
      ></Tabs>
    </Modal>
  );
}
