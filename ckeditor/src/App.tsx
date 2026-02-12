import Editor from './components/Editor';
import { useToggleStore } from './store/useToggleStore';

export default function App() {
  const toggleStore = useToggleStore();

  return (
    <div>
      <h2>CK</h2>
      <div className="editor">
        <Editor />
      </div>
      {toggleStore.isComponentOn && <div>component is on</div>}
    </div>
  );
}
